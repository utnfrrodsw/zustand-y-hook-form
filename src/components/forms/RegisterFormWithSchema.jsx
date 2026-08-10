import { useState } from 'react'
import { registerSchema } from '../../schemas/registerSchema'

const initialValues = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  email: '',
  telefono: '',
}

function fieldErrorsFromZod(error) {
  const flat = error.flatten().fieldErrors
  const errors = {}

  for (const key of Object.keys(flat)) {
    if (flat[key]?.[0]) {
      errors[key] = flat[key][0]
    }
  }

  return errors
}

export function RegisterFormWithSchema() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const result = registerSchema.safeParse(values)

    if (!result.success) {
      setErrors(fieldErrorsFromZod(result.error))
      return
    }

    setErrors({})
    console.log('Schema:', result.data)
  }

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="schema-nombre">Nombre</label>
        <input
          id="schema-nombre"
          name="nombre"
          type="text"
          value={values.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p className="field-error">{errors.nombre}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="schema-apellido">Apellido</label>
        <input
          id="schema-apellido"
          name="apellido"
          type="text"
          value={values.apellido}
          onChange={handleChange}
        />
        {errors.apellido && <p className="field-error">{errors.apellido}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="schema-fecha">Fecha de nacimiento</label>
        <input
          id="schema-fecha"
          name="fechaNacimiento"
          type="date"
          value={values.fechaNacimiento}
          onChange={handleChange}
        />
        {errors.fechaNacimiento && (
          <p className="field-error">{errors.fechaNacimiento}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="schema-email">Email</label>
        <input
          id="schema-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="schema-telefono">Teléfono (opcional)</label>
        <input
          id="schema-telefono"
          name="telefono"
          type="tel"
          value={values.telefono}
          onChange={handleChange}
        />
        {errors.telefono && <p className="field-error">{errors.telefono}</p>}
      </div>

      <button type="submit" className="btn">
        Registrarse
      </button>
    </form>
  )
}

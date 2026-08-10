import { useState } from 'react'

const initialValues = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  email: '',
  telefono: '',
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isPhoneValid(phone) {
  return /^\+?[\d\s-]{7,20}$/.test(phone)
}

function isBirthDateValid(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

export function RegisterFormManual() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}

    if (!values.nombre.trim()) {
      nextErrors.nombre = 'El nombre es obligatorio'
    }

    if (!values.apellido.trim()) {
      nextErrors.apellido = 'El apellido es obligatorio'
    }

    if (!values.fechaNacimiento) {
      nextErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria'
    } else if (!isBirthDateValid(values.fechaNacimiento)) {
      nextErrors.fechaNacimiento = 'La fecha debe ser anterior a hoy'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'El email es obligatorio'
    } else if (!isEmailValid(values.email)) {
      nextErrors.email = 'Email inválido'
    }

    if (values.telefono && !isPhoneValid(values.telefono)) {
      nextErrors.telefono = 'Teléfono inválido'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    console.log('Manual:', values)
  }

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate >
      <div className="form-field">
        <label htmlFor="manual-nombre">Nombre</label>
        <input
          id="manual-nombre"
          name="nombre"
          type="text"
          value={values.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p className="field-error">{errors.nombre}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="manual-apellido">Apellido</label>
        <input
          id="manual-apellido"
          name="apellido"
          type="text"
          value={values.apellido}
          onChange={handleChange}
        />
        {errors.apellido && <p className="field-error">{errors.apellido}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="manual-fecha">Fecha de nacimiento</label>
        <input
          id="manual-fecha"
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
        <label htmlFor="manual-email">Email</label>
        <input
          id="manual-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="manual-telefono">Teléfono (opcional)</label>
        <input
          id="manual-telefono"
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

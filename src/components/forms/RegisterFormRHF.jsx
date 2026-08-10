import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../schemas/registerSchema'

export function RegisterFormRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      email: '',
      telefono: '',
    },
  })

  function onValidSubmit(data) {
    console.log('useForm + Zod:', data)
  }

  return (
    <form
      className="register-form"
      onSubmit={handleSubmit(onValidSubmit)}
      noValidate
    >
      <div className="form-field">
        <label htmlFor="rhf-nombre">Nombre</label>
        <input id="rhf-nombre" type="text" {...register('nombre')} />
        {errors.nombre && (
          <p className="field-error">{errors.nombre.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="rhf-apellido">Apellido</label>
        <input id="rhf-apellido" type="text" {...register('apellido')} />
        {errors.apellido && (
          <p className="field-error">{errors.apellido.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="rhf-fecha">Fecha de nacimiento</label>
        <input id="rhf-fecha" type="date" {...register('fechaNacimiento')} />
        {errors.fechaNacimiento && (
          <p className="field-error">{errors.fechaNacimiento.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="rhf-email">Email</label>
        <input id="rhf-email" type="email" {...register('email')} />
        {errors.email && (
          <p className="field-error">{errors.email.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="rhf-telefono">Teléfono (opcional)</label>
        <input id="rhf-telefono" type="tel" {...register('telefono')} />
        {errors.telefono && (
          <p className="field-error">{errors.telefono.message}</p>
        )}
      </div>

      <button type="submit" className="btn">
        Registrarse
      </button>
    </form>
  )
}

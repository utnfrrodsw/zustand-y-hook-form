import { RegisterFormManual } from '../components/forms/RegisterFormManual'
import { RegisterFormWithSchema } from '../components/forms/RegisterFormWithSchema'
import { RegisterFormRHF } from '../components/forms/RegisterFormRHF'

export function RegisterPage() {
  return (
    <div className="register-page">
      <h1>Registro</h1>
      <p className="register-intro">
        Tres enfoques de validación del mismo formulario.
      </p>

      <section className="register-section">
        <h2>1. Sin librerías</h2>
        <p>Validación con ifs y estado local.</p>
        <RegisterFormManual />
      </section>

      <section className="register-section">
        <h2>2. Validación centralizada con Zod</h2>
        <p>Schema compartido y safeParse; el form sigue siendo manual.</p>
        <RegisterFormWithSchema />
      </section>

      <section className="register-section">
        <h2>3. useForm + Zod</h2>
        <p>react-hook-form con zodResolver.</p>
        <RegisterFormRHF />
      </section>
    </div>
  )
}

import './Formulario.css'
import Input from '../Input'
const Formulario = () =>{
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do paciente</h2>
                <Input label="Nome" placehoder="Digite o nome do paciente..."/>
                <Input label="Telefone" placehoder="Digite o telefone do paciente..."/>
                <Input label="Identidade" placehoder="Digite o documento de identidade do paciente..."/>
                <Input label="Endereço" placehoder="Digite o endereço completo do paciente..."/>
                <Input label="Referência 1" placehoder="Digite telefone de referência do paciente..."/>
                <Input label="Referência 2" placehoder="Digite segundo telefone de referência do paciente..."/>
            </form>
        </section>
    )
}
export default Formulario
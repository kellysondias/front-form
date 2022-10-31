import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Este e-mail não é válido").required("E-mail é obrigatório"),
    cpf: Yup.string().min(11, "O CPF precisa ter 11 caracteres").max(14, "Ultrapassou o limite de caracteres").required("CPF é obrigatório")
})
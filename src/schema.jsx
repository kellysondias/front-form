import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email().required("E-mail é obrigatório"),
    phone: Yup.number().min(11, "O número de telefone precisa ter 11 caracteres").max(14, "Ultrapassou o limite de caracteres"),
    cpf: Yup.string().min(11, "O CPF precisa ter 11 caracteres").max(14, "Ultrapassou o limite de caracteres").required("CPF é obrigatório")
})
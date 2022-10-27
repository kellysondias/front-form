import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email().required("E-mail é obrigatório"),
    cpf: Yup.number().min(11).required("CPF é obrigatório")
})
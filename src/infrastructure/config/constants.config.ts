export default {
    AUTHENTICATOR:{
        MESSAGES: {
            ERROR: {
                INCORRECT_EMAIL: `E-mail não encontrado, verifique e tente novamente.`,
                INCORRECT_PASSWORD: `Senha incorreta, verifique e tente novamente.`,
                AUTHORIZATION_NO: `Usuário não autorizado, verifique se está logado e tente novamente.`
            }
        }
    },
    MIDDLEWARE:{
        MESSAGES:{
            ERROR:{
                BODYFIELDS_NO: `Alguns campos não foram preenchidos, verifique e tente novamente.`,
                USERSEXISTS_NO: `Não encontramos o usuário {req.params.iduser}. Verifique e tente novamente`,
                USERSREPEATED_YES: `Usuário {rId} já existe!`,
                SERVIDORERROR_YES: " Erro no servidor, procure o suporte."
            }
        }
    },
    RETURN:{
        MESSAGES:{
            SENDS:{
                EMAILINVALID_YES: `Email (req.body.email) não encontrado na nossa base de dados.`

            }
        }
    }
}
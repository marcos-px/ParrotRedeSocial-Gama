export default {
    AUTHENTICATOR:{
        MESSAGES: {
            ERROR: {
                INCORRECT_EMAIL: `E-mail não encontrado, verifique e tente novamente.`,
                INCORRECT_PASSWORD: `Senha incorreta, verifique e tente novamente.`,
                AUTHORIZATION_NO: `Usuário não autorizado, verifique se está logado e tente novamente.`,
                LOGININCORRECT_YES: `Dados enviados incorretamente. Gentileza verificar.`
            }
        }
    },
    MIDDLEWARE:{
        MESSAGES:{
            ERROR:{
                BODYFIELDS_NO: `Alguns campos não foram preenchidos, verifique e tente novamente.`,
                USERSEXISTS_NO: `Não encontramos o usuário {req.params.iduser}. Verifique e tente novamente`,
                USERSREPEATED_YES: `Usuário {rId} já existe!`,
                SERVIDORERROR_YES: ` Erro no servidor, procure o suporte.`,
                ERRORDELETED_YES: `Deu ruim ao deletar ao post`,
                ERRORUPDATED_YES: `Deu ruim ao atualizar o post`,
                ERRORCREATED_YES: `Deu ruim ao criar o post`,
                ERRORGETBYID_YES: `Deu ruim ao BUSCAR O POST  por id`,
                ERRORLIST_YES: `Deu ruim ap listar post.`,

            }
        }
    },
    RETURN:{
        MESSAGES:{
            SENDS:{
                EMAILINVALID_YES: `Email (req.body.email) não encontrado na nossa base de dados.`,
                KEYANDEMAILINVALID_YES: `Senha ou e-mail inválidos.`,
                

            }
        }
    }
}
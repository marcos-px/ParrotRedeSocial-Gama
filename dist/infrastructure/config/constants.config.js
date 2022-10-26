"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    AUTHENTICATOR: {
        MESSAGES: {
            ERROR: {
                INCORRECT_EMAIL: `E-mail não encontrado, verifique e tente novamente.`,
                INCORRECT_PASSWORD: `Senha incorreta, verifique e tente novamente.`,
                AUTHORIZATION_NO: `Usuário não autorizado, verifique se está logado e tente novamente.`
            }
        }
    },
    MIDDLEWARE: {
        MESSAGES: {
            ERROR: {
                BODYFIELDS_NO: `Alguns campos não foram preenchidos, verifique e tente novamente.`,
                USERSEXISTS_NO: `Não encontramos o usuário {req.params.iduser}. Verifique e tente novamente`,
                USERSREPEATED_YES: `Usuário {rId} já existe!`,
                SERVIDORERROR_YES: ` Erro no servidor, procure o suporte.`,
                ERRORDELETED_YES: `Deu ruim ao deletar ao post`,
                ERRORUPDATED_YES: `Deu ruim ao atualizar o post`,
                ERRORCREATED_YES: `Deu ruim ao criar o post`,
                ERRORGETBYID_YES: `Deu ruim ao BUSCAR O POST  por id`,
                ERRORLIST_YES: `Deu ruim ap listar post.`
            }
        }
    },
    RETURN: {
        MESSAGES: {
            SENDS: {
                EMAILINVALID_YES: `Email (req.body.email) não encontrado na nossa base de dados.`,
                KEYANDEMAILINVALID_YES: `Senha ou e-mail inválidos.`,
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9jb25maWcvY29uc3RhbnRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlO0lBQ1gsYUFBYSxFQUFDO1FBQ1YsUUFBUSxFQUFFO1lBQ04sS0FBSyxFQUFFO2dCQUNILGVBQWUsRUFBRSxxREFBcUQ7Z0JBQ3RFLGtCQUFrQixFQUFFLCtDQUErQztnQkFDbkUsZ0JBQWdCLEVBQUUscUVBQXFFO2FBQzFGO1NBQ0o7S0FDSjtJQUNELFVBQVUsRUFBQztRQUNQLFFBQVEsRUFBQztZQUNMLEtBQUssRUFBQztnQkFDRixhQUFhLEVBQUUsbUVBQW1FO2dCQUNsRixjQUFjLEVBQUUsNEVBQTRFO2dCQUM1RixpQkFBaUIsRUFBRSwwQkFBMEI7Z0JBQzdDLGlCQUFpQixFQUFFLHVDQUF1QztnQkFDMUQsZ0JBQWdCLEVBQUUsNkJBQTZCO2dCQUMvQyxnQkFBZ0IsRUFBRSw4QkFBOEI7Z0JBQ2hELGdCQUFnQixFQUFFLDBCQUEwQjtnQkFDNUMsZ0JBQWdCLEVBQUUsbUNBQW1DO2dCQUNyRCxhQUFhLEVBQUUsMEJBQTBCO2FBRTVDO1NBQ0o7S0FDSjtJQUNELE1BQU0sRUFBQztRQUNILFFBQVEsRUFBQztZQUNMLEtBQUssRUFBQztnQkFDRixnQkFBZ0IsRUFBRSwrREFBK0Q7Z0JBQ2pGLHNCQUFzQixFQUFFLDRCQUE0QjthQUd2RDtTQUNKO0tBQ0o7Q0FDSixDQUFBIn0=
// import debug from "debug";
// import { Request, Response } from "express";
// import { getErrorMessage } from "../utils/errors.util";
// import { auth } from "../middlewares/auth.middleware";

// export const login = async (req: Request, res: Response) => {
//     try {
//         const procuraUsuario = await auth.(req.body);
//         // res.status(200).send(procuraUsuario)
//     } catch (error) {
//         return res.status(500).send(getErrorMessage(error))
//     }
// };

// export const registerOne = async (req: Request, res: Response) => {
//     try {
//       await userServices.register(req.body);
//       res.status(200).send('Usuário cadastrado com sucesso!');
//     } catch (error) {
//       return res.status(500).send(getErrorMessage(error));
//     }
//    };


// const log: debug.IDebugger = debug('app:auth-controller');

// const secret = process.env.SECRET_KEY
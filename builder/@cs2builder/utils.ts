import { Instance } from "cs_script/point_script";

export const debug = (msg: string) => {
    for (let i = 0; i < 5; i++) {
        Instance.Msg(" ")
    }

    Instance.Msg('====================[DEBUG]====================')
    Instance.Msg(msg)
    Instance.Msg('====================[DEBUG]====================')

    for (let i = 0; i < 5; i++) {
        Instance.Msg(" ")
    }
}
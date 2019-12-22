import Strings from "./Strings"

export const mustFilled = (value) => value ? null : Strings.errors.mustFilled
export const email = (value) => {
    if (!value) return Strings.errors.mustFilled
    else if (!/.+@.+\..+/g.test(value))
        return Strings.errors.inValid
    else return null
}
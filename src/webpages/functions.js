export const titleCase =(genre) =>
{
    let fixed = genre.split(' ')
    const name = fixed[0].charAt(0).toUpperCase() + fixed[0].substring(1)
    const type = fixed[1].charAt(0).toUpperCase() + fixed[1].substring(1)
    fixed = name +' '+type
    return fixed
}

export type AuthParamsList = {
    SignIn: undefined
    SignUp: undefined
    Profile: undefined
    EditProfile: undefined
    Bookings: undefined
    TermsOfService: undefined
}

export type AppParamsList = {
    Home: undefined
    Trending: undefined
    Favorites: undefined
    Profile: undefined
}

export type HomeParamsList = {
    Home: undefined
    SeeAll: undefined
}

export type ProfileParamsList = {
    Profile: undefined
    EditProfile: undefined
    Bookings: undefined
    TermsOfService: undefined
}

export type AuthContextProps = {
    user: UserProps
    setUser: (user: UserProps) => void
    loading: boolean
    signIn: (email: string, password: string) => void
    signUp: (user: UserProps) => void
    signOut: () => void
}

export type LocationProps = {
    id: string
    city: string
    country: string
    description: string
    image1: any
    image2: any
    image3: any
    favorited: boolean
    booked: boolean
    trending: boolean
    price: number
}

export type UserProps = {
    firstName: string
    lastName: string
    email: string
    password: string
    avatar: string
    auth: boolean
    favorites: LocationProps[]
    bookings: LocationProps[]
}

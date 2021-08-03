import {
    Cannes1,
    Cannes2,
    Cannes3,
    Cape_Town1,
    Cape_Town2,
    Cape_Town3,
    Sao_Paulo1,
    Sao_Paulo2,
    Sao_Paulo3,
    Shanghai1,
    Shanghai2,
    Shanghai3,
    Sydney1,
    Sydney2,
    Sydney3,
} from '../constants/images'
import { LocationProps } from '../types'

const random = () => {
    if (Math.round(Math.random() * 1) === 1) return true
    return false
}

export const locations: LocationProps[] = [
    {
        id: '1',
        city: 'Cannes',
        country: 'France',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper, erat id consequat rhoncus, quam arcu sollicitudin risus, insemper turpis erat ut massa. Sed ac consequat erat, nec semper sem.',
        image1: Cannes1,
        image2: Cannes2,
        image3: Cannes3,
        favorited: false,
        booked: false,
        trending: random(),
        price: 15,
    },

    {
        id: '2',
        city: 'Cape Town',
        country: 'South Africa',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper, erat id consequat rhoncus, quam arcu sollicitudin risus, insemper turpis erat ut massa. Sed ac consequat erat, nec semper sem.',
        image1: Cape_Town1,
        image2: Cape_Town2,
        image3: Cape_Town3,
        favorited: false,
        booked: false,
        trending: random(),
        price: 15,
    },

    {
        id: '3',
        city: 'São Paulo',
        country: 'Brazil',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper, erat id consequat rhoncus, quam arcu sollicitudin risus, insemper turpis erat ut massa. Sed ac consequat erat, nec semper sem.',
        image1: Sao_Paulo1,
        image2: Sao_Paulo2,
        image3: Sao_Paulo3,
        favorited: false,
        booked: false,
        trending: random(),
        price: 15,
    },

    {
        id: '4',
        city: 'Shanghai',
        country: 'China',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper, erat id consequat rhoncus, quam arcu sollicitudin risus, insemper turpis erat ut massa. Sed ac consequat erat, nec semper sem.',
        image1: Shanghai1,
        image2: Shanghai2,
        image3: Shanghai3,
        favorited: false,
        booked: false,
        trending: random(),
        price: 15,
    },

    {
        id: '5',
        city: 'Sydney',
        country: 'Australia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper, erat id consequat rhoncus, quam arcu sollicitudin risus, insemper turpis erat ut massa. Sed ac consequat erat, nec semper sem.',
        image1: Sydney1,
        image2: Sydney2,
        image3: Sydney3,
        favorited: false,
        booked: false,
        trending: random(),
        price: 15,
    },
]

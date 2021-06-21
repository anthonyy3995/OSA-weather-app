import {gql} from '@apollo/client'

export const LOAD_WEATHER = gql`
    query getCityByName($name: String!){
        getCityByName(name: $name){
        id
            name
            country
            coord {
            lon
            lat
            }
            weather {
            summary {
                title
                description
                icon
            }
            temperature {
                actual
                feelsLike
                min
                max
            }
            wind {
                speed
                deg
            }
            clouds {
                all
                visibility
                humidity
            }
            timestamp
            }
        }
        }
`
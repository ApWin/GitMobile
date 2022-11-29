import User from 'services/api/User/sagas'
import Filemanager from 'services/api/Filemanager/sagas'

export default function sagas (api) {
    return [
        User(api),
        Filemanager(api)
    ]
}

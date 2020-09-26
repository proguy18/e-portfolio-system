import {
    IMAGE_UPLOAD_REQUEST,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_UPLOAD_FAILURE,
    IMAGE_DOWNLOAD_REQUEST,
    IMAGE_DOWNLOAD_SUCCESS,
    IMAGE_DOWNLOAD_FAILURE
} from '../constants/images'

const images = JSON.parse(localStorage.getItem("images"))
const initialState = images ? {pending: false, images} : {pending: false, images: {}}

const imageStore = (state = initialState, action) => {
    var newState = state
    switch(action.type) {
        case IMAGE_UPLOAD_REQUEST:
            return {
                pending: true,
                images: state.images
            }
        case IMAGE_UPLOAD_SUCCESS:
            newState.images[action.id] = action.image
            return {
                pending: false,
                images: newState.images
            }
        case IMAGE_UPLOAD_FAILURE:
            return {
                pending: false,
                images: state.images
            }
        case IMAGE_DOWNLOAD_REQUEST:
            return {
                pending: true,
                images: state.images
            }
        case IMAGE_DOWNLOAD_SUCCESS:
            newState.images[action.id] = action.image
            return {
                pending: false,
                images: newState.images
            }
        case IMAGE_DOWNLOAD_FAILURE:
            return {
                pending: false,
                images: state.images
            }
        default:
            return state
    }
}

export default imageStore
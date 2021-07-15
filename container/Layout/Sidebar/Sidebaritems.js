import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faClipboard } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faComments } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faImages } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faList } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faUser } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import {
    OVERVIEW_PAGE,
    POSTS_PAGE,
    COMMENTS_PAGE,
    ALBUM_PAGE,
    PHOTO_PAGE,
    TODOS_PAGE,
    USERS_PAGE
} from '../../../settings/constants';

export const menuitems = [
    {
        id : 1,
        label : "Overview",
        icon : <FontAwesomeIcon icon={faTachometerAlt} size="lg"/>,
        redirect : OVERVIEW_PAGE,
    },
    {
        id : 2,
        label : "Posts",
        icon : <FontAwesomeIcon icon={faClipboard} size="lg"/>,
        redirect : POSTS_PAGE
    },
    // {
    //     id : 3,
    //     label : "Comments",
    //     icon : <FontAwesomeIcon icon={faComments} size="lg"/>,
    //     redirect : COMMENTS_PAGE
    // },
    // {
    //     id : 4,
    //     label : "Album",
    //     icon : <FontAwesomeIcon icon={faPhotoVideo} size="lg"/>,
    //     redirect : ALBUM_PAGE
    // },
    // {
    //     id : 5,
    //     label : "Photos",
    //     icon : <FontAwesomeIcon icon={faImages} size="lg"/>,
    //     redirect : PHOTO_PAGE
    // },
    {
        id : 6,
        label : "Todos",
        icon : <FontAwesomeIcon icon={faList} size="lg"/>,
        redirect : TODOS_PAGE
    },
    {
        id : 7,
        label : "Users",
        icon : <FontAwesomeIcon icon={faUser} size="lg"/>,
        redirect : USERS_PAGE
    },
]
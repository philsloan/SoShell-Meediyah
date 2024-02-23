//   /api/users
    //get all users
    //get a single user by it's _id and populated thought and friend data
    // Post a new user:
        // example data
        // // {
        //     "username": "lernantino",
        //     "email": "lernantino@gmail.com"
        // }
    
    //put to update a user by it's _id
    //delete to remove user by its _id

    //BONUS: REMOVE A USERS ASSOCIATED THOUGHTS WHEN DELETED

    // /api/users/:userId/friends/:friendId

        // POST to add a new friend to a user's friend list

        // DELETE to remove a friend from a user's friend list  
const router = require('express').Router();
const {
    getUsers,
    getSingleUsers,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require("../../controllers/user-controller.js");

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId').get(getSingleUsers);
router.route('/:userId').put(updateUsers);
router.route('/:userId').delete(deleteUsers);

router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(deleteFriend);


module.exports = router;
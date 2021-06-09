import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching,  toggleFollowingProgress, unfollow, getUsers } from '../../redux/user-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import { getUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching,getFollowingInProgress, getUsersReselect } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=> {
        //      this.props.toggleIsFetching(false);
        //      this.props.setUsers(data.items);
        //      this.props.setTotalUsersCount(data.totalCount);
        // });
    }
    
    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
       
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers( pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //      this.props.setUsers(data.items);
        //     });
    }

    render(){
        return  (<>
                {this.props.isFetching ? 
                <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} 
                    onPageChanged={this.onPageChanged}
                    users={this.props.users} 
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress} />
                </>
        )
    }
}

// DO SELECTOROV
// let mapStateToProps = (state) =>{
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
// let mapDispatchToProps = (dispatch) =>{
//     return {
//         follow: (userId) =>{
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) =>{
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) =>{
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

let mapStateToProps = (state) =>{
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, 
        setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
        getUsers })
)(UsersContainer)

// BEFORE COMPOSE
// export default withAuthRedirect(connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, 
//                       setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
//                       getUsers })(UsersContainer));
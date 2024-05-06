import React from 'react'

const DataFeed = (props) => {
    return (
        <ul>
            {props.users.map(user => (
                <div>
                    <div>{'__________________'}</div>
                    <div>{user.name} </div>
                    <div>{user.age} </div>
                </div>
            ))

            }
        </ul>
    )
}
export default DataFeed

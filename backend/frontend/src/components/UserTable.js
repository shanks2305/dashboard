import React from 'react'

const UserTable = () => {
    return (
        <div className="row">
            <span className="display-4 text-info" >User's Status</span>
            <div className="col-md-12 p-5 m-5">
                <table className="bg-dark table  table-bordered table-hover text-info" >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>User</th>
                            <th>Country</th>
                            <th>Usage</th>
                            <th>Payment Method</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><span >John Doe</span></td>
                            <td>United States of America</td>
                            <td>60%</td>
                            <td>Credit Card</td>
                            <td>6 hours ago</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td><span >John Doe</span></td>
                            <td>United States of America</td>
                            <td>60%</td>
                            <td>Credit Card</td>
                            <td>6 hours ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><span >John Doe</span></td>
                            <td>United States of America</td>
                            <td>60%</td>
                            <td>Credit Card</td>
                            <td>6 hours ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><span >John Doe</span></td>
                            <td>United States of America</td>
                            <td>60%</td>
                            <td>Credit Card</td>
                            <td>6 hours ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><span >John Doe</span></td>
                            <td>United States of America</td>
                            <td>60%</td>
                            <td>Credit Card</td>
                            <td>6 hours ago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><span >John Doe</span></td>
                            <td>United States of America</td>
                            <td>60%</td>
                            <td>Credit Card</td>
                            <td>6 hours ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserTable

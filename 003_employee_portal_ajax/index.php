<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Portal | Ajax</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        thead tr th {
            background-color: #343a40;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <a href="#" class="navbar-brand">Employee Portal | AJAX </a>
    </nav>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <h3 class="mt-3">Employee Portal</h3>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam saepe velit consequuntur libero distinctio, ea alias quae minus aspernatur aliquam odit reiciendis totam culpa impedit natus! Quaerat fugiat magni, architecto accusantium exercitationem doloribus corporis sint itaque cumque quos amet.</p>
                <button class="btn btn-success" data-toggle="modal" data-target="#add-employee-modal">Add Employee</button>
            </div>
        </div>
    </div>

    <div class="modal fade" id="add-employee-modal">
        <div class="modal-dialog">
            <div class="modal-content animated slideInRight">
                <div class="modal-header bg-success text-white">
                    <h3 class="modal-title">Add Employee</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body bg-light">
                    <!-- Add your form or content here -->
                     <form action="" class="add-employee-form">
                        <div class="form-group">
                            <input type="text" name="" required id="add-first-name" class="form-control mb-3" placeholder="First Name">
                            <input type="text" name=""   required id="add-last-name" class="form-control mb-3" placeholder="Last Name">
                            <input type="email" name="" required id="add-email" class="form-control mb-3" placeholder="Email">

                            <div action="" id="" class="form-group">
                                <select required name="gender" id="add-gender" class="form-control">
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                           
                            <input type="text" name="gender" id="add-ip-address" required class="form-control" placeholder="IP_Address">
                            <input type="submit" name="submit_btn" id=""  class="btn btn-success" value="Add Employee">
                          
                        </div>
                     </form>
                </div>
            </div>
        </div>
    </div>


        <!-- update emplyee nodel -->
    <div class="modal fade" id="update-employee-modal">
        <div class="modal-dialog">
            <div class="modal-content animated slideInLeft">
                <div class="modal-header bg-secondary text-white">
                    <h3 class="modal-title">Update Employee</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body bg-light">
                    <!-- Add your form or content here -->
                     <form action="" class="update-employee-form" id="update-employee-form">
                        <div class="form-group">
                            <input type="hidden" name="" required id="update-emp-id" class="form-control mb-3" placeholder="Employee ID">
                            <input type="text" name="" required id="update-first-name" class="form-control mb-3" placeholder="First Name">
                            <input type="text" name=""   required id="update-last-name" class="form-control mb-3" placeholder="Last Name">
                            <input type="email" name="" required id="update-email" class="form-control mb-3" placeholder="Email">

                            <div action="" id="" class="form-group">
                                <select required name="gender" id="update-gender" class="form-control">
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                           
                            <input type="text" name="gender" id="update-ip-address" required class="form-control" placeholder="IP_Address">
                            <input type="submit" name="update_btn" id=""  class="btn btn-success" value="Add Employee">
                          
                        </div>
                     </form>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <table class="table table-hover text-center table-striped table-secondary">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Emp ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                            <th>IP ADDRESS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody id="table-body" class="text-left">
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script type="module" src="./app.js"></script>
</body>
</html>
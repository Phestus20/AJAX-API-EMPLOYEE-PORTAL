<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX REST API</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="../fontawesome/css/brands.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    

    <style>
        thead tr th {
    background-color: #6c757d; /* Bootstrap bg-secondary */
    color: #ffffff; /* Bootstrap text-white */
}
    </style>
</head>
<body>

    <nav class="navbar navbar-dark bg-dark">
        <a href="#" class="navbar-brand">AJAX REST API</a>
    </nav>

     <!-- Data section -->
    <div class="container mt-3">

        <div class="row ">

            <div class="col text-center">
                <div class="btn-group" role="group" aria-label="Button group">
                    <button id="get-btn" class="btn btn-primary m-2">GET</button>
                    <button id="post-btn" class="btn btn-success m-2">POST</button>
                    <button id="put-btn" class="btn btn-warning m-2">PUT</button>
                    <button id="delete-btn" class="btn btn-danger m-2">DELETE</button>
                </div>
            </div>
        </div>
    </div>



    <!-- Tablesection -->
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <table class="table tabele-hover text-center table-secondary table-striped">
                    <thead class="text-left">
                        <tr>
                            <th class="bg-secondary text-white">#</th>
                            <th class="bg-secondary text-white">Emp ID</th>
                            <th class="bg-secondary text-white">FIRST NAME</th>
                            <th class="bg-secondary text-white">LAST NAME</th>
                            <th class="bg-secondary text-white">EMAIL</th>
                            <th class="bg-secondary text-white">GENDER</th>
                            <th class="bg-secondary text-white">IP ADDRESS</th>
                        </tr>
                    </thead>

                    <tbody id="table-body" class="text-left">
                       
                    </tbody>

                </table>
            </div>
        </div>
    </div>
      
      
    

    <!-- Data section -->
    
     
          
    

    <!-- Data section -->
  
   

<script type="module" src="./app.js"></script>
<script src="../fontawesome/js/all.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</body>
</html>
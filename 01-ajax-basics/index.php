<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax Basics</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="../fontawesome/css/brands.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <div class="navbar navbar-dark bg-dark">
        <a href="#" class="navbar-brand">AJAX Basics</a>
    </div>

    <div class="container mt-3">

        <div class="row justify-content-center">

            <div class="col text-center">
                <div class="btn-group" role="group" aria-label="Button group">
                    <button id="text-btn" class="btn btn-primary m-2">Text Data</button>
                    <button id="json-btn" class="btn btn-success m-2">JSON Data</button>
                    <button id="api-btn" class="btn btn-warning m-2">API Data</button>
                </div>
            </div>
        </div>
    </div>



    <!-- Data section -->
    <div class="container-fuild m-3">
        
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-primary">
                        <h3 class="">Text Data</h3>
                    </div>
                    <div class="card-body" id="text-card">
                        <!-- Content will be populated here -->
                    </div>
                </div>
            </div>
      
    

    <!-- Data section -->
    
     
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-success">
                        <h3 class="">JSON Data</h3>
                    </div>
                    <div class="card-body" id="json-card">
                        <!-- Content will be populated here -->
                    </div>
                </div>
            </div>
       
    

    <!-- Data section -->
  
        
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-warning">
                        <h3 class="">API Data</h3>
                    </div>
                    <div class="card-body" id="api-card">
                        <!-- Content will be populated here -->
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="./app.js"></script>
<script src="../fontawesome/js/all.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</body>
</html>
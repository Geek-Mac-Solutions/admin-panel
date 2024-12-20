@extends('web.layouts.app')
@section('content')
 
<div class="container-fluid">
   <div class="row align-items-center pt-2">
      <div class="col-lg-3 col-sm-3">
         <a href="/"  class="hvr-icon-back text-uppercase font-13 fw-bold text-purple">
         <i class="fa-regular fa-circle-left hvr-icon"></i>
         BACK TO HOME
         </a>
      </div>
      <div class="col-lg-6 col-sm-6 text-center">
         <h1 class="font-30 fw-bold text-uppercase text-purple">INCOME & EXPENDITURE SUMMERY
         </h1>
         <p class="font-20 fw-500 text-purple">GRAPH VIEW

        </p>
      </div>

      <div class="col-lg-3 col-sm-3 pt-lg-0 pt-3 text-end">
        <p>
            <a href="https://docs.google.com/spreadsheets/d/1dNmpJHCyKlcAR1VIIPPHBZLhI7Qf9MzXB3XnPOQZWl4/edit?usp=sharing"
             target="_blank" class="text-white bg-info font-12 fw-500
                       rounded-pill px-3 py-2 hvr-shrink">GRAPH VIEW
                    </a>
                  
                </p>
      </div>


   </div>
</div>
<div class="container-fluid py-lg-5 py-3 px-lg-5 ">
   <div class="container">
      <div class="row middle-hight">
        <div class="col-lg-10 mx-auto">
 
                <div>
                    <canvas id="incomeSummeryChart"></canvas>
                  </div>
               
        </div>
      </div>
   </div>
</div>
@endsection

@extends('web.layouts.app')
@section('content')
@php
use Carbon\Carbon;
@endphp
<div class="container-fluid">
   <div class="row align-items-center pt-2">
      <div class="col-lg-3 col-sm-3">
         <a href="/"  class="hvr-icon-back text-uppercase font-13 fw-bold text-purple">
         <i class="fa-regular fa-circle-left hvr-icon"></i>
         BACK TO HOME
         </a>
      </div>
      <div class="col-lg-6 col-sm-6 text-center">
         <h1 class="font-30 fw-bold text-uppercase text-purple">STUDENT NOTES AND PAPER ANSWERS 
         </h1>
         <p class="font-20 fw-500 text-purple">GRADE 6 - SCIENCE
         </p>
      </div>
   </div>
</div>
<div class="container-fluid py-lg-5 py-3 px-lg-5 ">
   <div class="row middle-hight">
      <div class="col-12">
         
         <div class="table-responsive  ">
            <table id="notePaperTable" class="table table-striped table-hover table-bordered">
               <thead class="text-white gradient-background text-uppercase fw-light font-14">
                  <th>MONTH</th>
                  <th>TOPIC</th>
                  <th>DOCUMENT</th>
                  <th>STATUS</th>
                  <th>TEACHER COMMENt</th>
                  </tr>
               </thead>
               <tbody class="font-14 align-items-center fw-500">
                  <tr>
                     <td>JANUARY</td>
                     <td>Grade 6 - Unit 05 - Light and Vision
                        (English Medium)
                     </td>
                     <td><input class="form-control font-14 fw-500 text-dark" type="file" id="formFileMultiple" multiple=""></td>
                     <td>
                        <button type="button" class="btn btn-danger px-3 fw-bolder rounded-pill text-uppercase font-12"> TEACHER REJECTED
                        </button>
                     </td>
                     <td>Very Good
                     </td>
                  </tr>
                  <tr>
                     <td>JANUARY</td>
                     <td>Grade 6 - Unit 05 - Light and Vision
                        (English Medium)
                     </td>
                     <td><input class="form-control font-14 fw-500 text-dark" type="file" id="formFileMultiple" multiple=""></td>
                     <td>
                        <button type="button" class="btn btn-success px-3 fw-bolder rounded-pill text-uppercase font-12"> TEACHER APPROVED

                        </button>
                     </td>
                     <td>Very Good
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>
@endsection
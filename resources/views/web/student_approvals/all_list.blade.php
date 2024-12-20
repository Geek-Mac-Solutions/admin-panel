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
         <h1 class="font-36 fw-bold text-uppercase text-purple">STUDENT APPROVALS

         </h1>

      </div>
      <div class="col-lg-3 col-sm-3 pt-lg-0 pt-3 text-end">

    </div>


   </div>
</div>
<div class="container-fluid py-lg-5 py-3 px-lg-5 ">
   <div class="container">
      <div class="row middle-hight justify-content-center">
         <div  class="col-lg-3 col-sm-4 mb-3 align-items-center">
            <div class="border-new pt-3 pb-4 px-3 mx-lg-0 mx-sm-0 mx-3  rounded-35 bg-white text-center">
                <i class="fa-solid fa-tag fs-1 text-purple  "></i>
               <p
                  class="font-20 text-uppercase fw-bold text-purple py-3 rounded-35  ">
                  SCHOLARSHIP
                  APPROVALS
                   </p>
               <div class="row justify-content-center ">
                  <div class="col-lg-10 text-white ">
                     <a href="{{ route('web.scholarship.details') }}" class=" w-100 text-uppercase font-14
                      text-white rounded-pill py-2 px-3 bg-primary fw-500 align-items-center   hvr-shrink">See More</a>
                  </div>
               </div>
            </div>
         </div>






         <div  class="col-lg-3 col-sm-4 mb-3 align-items-center">
            <div class="border-new pt-3 pb-4 px-3 mx-lg-0 mx-sm-0 mx-3  rounded-35 bg-white text-center">
                <i class="fa-solid fa-tag fs-1 text-purple  "></i>
               <p
                  class="font-20 text-uppercase fw-bold text-purple py-3 rounded-35  ">
                  OTHER GRADE
                  REQUESTS
               </p>
               <div class="row justify-content-center ">
                  <div class="col-lg-10 text-white ">
                     <a href="{{ route('web.student_approvals.grade_requests') }}" class=" w-100 text-uppercase font-14
                      text-white rounded-pill py-2 px-3 bg-primary fw-500 align-items-center   hvr-shrink">See More</a>
                  </div>
               </div>
            </div>
         </div>



         <div  class="col-lg-3 col-sm-4 mb-3 align-items-center">
            <div class="border-new pt-3 pb-4 px-3 mx-lg-0 mx-sm-0 mx-3  rounded-35 bg-white text-center">
                <i class="fa-solid fa-tag fs-1 text-purple  "></i>
               <p
                  class="font-20 text-uppercase fw-bold text-purple py-3 rounded-35  ">
                  FREE VIDEO ACCESS
                  REQUEST
               </p>
               <div class="row justify-content-center ">
                  <div class="col-lg-10 text-white ">
                     <a href="{{ route('web.student_approvals.free_requests') }}" class=" w-100 text-uppercase font-14
                      text-white rounded-pill py-2 px-3 bg-primary fw-500 align-items-center   hvr-shrink">See More</a>
                  </div>
               </div>
            </div>
         </div>



      </div>
   </div>
</div>
@endsection

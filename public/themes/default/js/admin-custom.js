
const ctx = document.getElementById('incomeSummeryChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'INCOME',
        data: [400000, 300000, 350000, 400000, 450000, 500000, 480000, 450000, 400000, 500000, 520000, 600000],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'EXPENSES',
        data: [100000, 120000, 150000, 100000, 120000, 110000, 130000, 120000, 150000, 110000, 120000, 130000],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'PROFIT/LOSS',
        data: [300000, 180000, 200000, 300000, 330000, 390000, 350000, 330000, 250000, 390000, 400000, 470000],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




$(document).ready( function () {
    $('#feesCashTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#feesPosTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#feesCardPaymentTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    
    $('#feesErrorPaymentTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#feesBankPaymentTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#PaymentHistoryTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#otherPyamentCash').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#liveClass').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#attendanceTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#cashBlanceTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#mySalaryTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#myLeavesTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#pendingOrderPickUp').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#pendingOrderPickUp').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#pendingOrderDeliver').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#disOrderTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#pendingDisOrder').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#addItems').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#studentDetailsTable').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#inactiveStudents').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#scholarshopDetails').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#scholarshopAdd').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#recAccess').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#addRecAccess').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#analysingTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#pendingCertificateTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#approvedCertificateTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#subjectwiseVideoTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#otherTalenteVideoTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#classIssues').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#videoRecIssues').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#teacherReview').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#classVideoAnalysing').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#classVideosSummery').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#videoTimeTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#teacherPayment').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#paymentAnalysingTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    $('#ourTeacherTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
     
    $('#scheduleClass').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );
    
    $('#addSubjectTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );

    $('#withHoldingTaxTbl').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5'
            ]
        }
    );






    $('#mainCashTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#depositeCashTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#bankCashTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#pettyCashTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#pettyCashViewTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#specialApprovalsTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#employeeSalaryTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    
    $('#employeeAttendanceTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#employeeLeaveTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#employeeLeaveCheckTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#pendingLeaveTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#gradeRequestTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#freeRequestTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });
    $('#incomeTaxTbl').DataTable(  {
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5'
        ]
    });



});










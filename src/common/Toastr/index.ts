import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

toastr.options = {
  timeOut: 4000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,
  progressBar: true
}

export { toastr }

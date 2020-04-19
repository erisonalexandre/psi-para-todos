<template>
  <div class="altura-100-centro container">
    <div class="row">
      <div class="col-md-4">
        <card>
          <template slot="header">
            <h2 class="text-center mt-2 text-white"><strong>Seus Agendamento</strong></h2>
          </template>
          <div class="d-flex justify-content-center">
            <datepicker inline></datepicker>
          </div>
        </card>
        <img :src="require('../assets/agendamento_paciente.svg')" class="img-fluid" width="500px" >
      </div>
      <div class="col-md-4">
        <img :src="require('../assets/ultimo_atendimento.svg')" class="img-fluid" width="500px" >
      </div>
      <div class="col-md-4">
        <img :src="require('../assets/atendimentos_no_mes.svg')" class="img-fluid" width="500px" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
.rtl {
  direction: rtl;
}
.vdp-datepicker {
  width: 100%;
  position: relative;
  text-align: left;
}
.vdp-datepicker * {
  box-sizing: border-box;
}
.vdp-datepicker input {
  border: none;
}

.vdp-datepicker__calendar {
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 300px;
  border: 1px solid #ccc;
}
.vdp-datepicker__calendar header {
  display: block;
  line-height: 40px;
}
.vdp-datepicker__calendar header span {
  display: inline-block;
  text-align: center;
  width: 71.42857142857143%;
  float: left;
}
.vdp-datepicker__calendar header .prev,
.vdp-datepicker__calendar header .next {
  width: 14.285714285714286%;
  float: left;
  text-indent: -10000px;
  position: relative;
}
.vdp-datepicker__calendar header .prev:after,
.vdp-datepicker__calendar header .next:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 6px solid transparent;
}
.vdp-datepicker__calendar header .prev:after {
  border-right: 10px solid #000;
  margin-left: -5px;
}
.vdp-datepicker__calendar header .prev.disabled:after {
  border-right: 10px solid #ddd;
}
.vdp-datepicker__calendar header .next:after {
  border-left: 10px solid #000;
  margin-left: 5px;
}
.vdp-datepicker__calendar header .next.disabled:after {
  border-left: 10px solid #ddd;
}
.vdp-datepicker__calendar header .prev:not(.disabled),
.vdp-datepicker__calendar header .next:not(.disabled),
.vdp-datepicker__calendar header .up:not(.disabled) {
  cursor: pointer;
}
.vdp-datepicker__calendar header .prev:not(.disabled):hover,
.vdp-datepicker__calendar header .next:not(.disabled):hover,
.vdp-datepicker__calendar header .up:not(.disabled):hover {
  background: #eee;
}
.vdp-datepicker__calendar .disabled {
  color: #ddd;
  cursor: default;
}
.vdp-datepicker__calendar .flex-rtl {
  display: flex;
  width: inherit;
  flex-wrap: wrap;
}
.vdp-datepicker__calendar .cell {
  display: inline-block;
  padding: 0 5px;
  width: 14.285714285714286%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {
  cursor: pointer;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #4bd;
}
.vdp-datepicker__calendar .cell.selected {
  background: #4bd;
}
.vdp-datepicker__calendar .cell.selected:hover {
  background: #4bd;
}
.vdp-datepicker__calendar .cell.selected.highlighted {
  background: #4bd;
}
.vdp-datepicker__calendar .cell.highlighted {
  background: #cae5ed;
}
.vdp-datepicker__calendar .cell.highlighted.disabled {
  color: #a3a3a3;
}
.vdp-datepicker__calendar .cell.grey {
  color: #888;
}
.vdp-datepicker__calendar .cell.grey:hover {
  background: inherit;
}
.vdp-datepicker__calendar .cell.day-header {
  font-size: 75%;
  white-space: nowrap;
  cursor: inherit;
}
.vdp-datepicker__calendar .cell.day-header:hover {
  background: inherit;
}
.vdp-datepicker__calendar .month,
.vdp-datepicker__calendar .year {
  width: 33.333%;
}
.vdp-datepicker__clear-button,
.vdp-datepicker__calendar-button {
  cursor: pointer;
  font-style: normal;
}
.vdp-datepicker__clear-button.disabled,
.vdp-datepicker__calendar-button.disabled {
  color: #999;
  cursor: default;
}

/* Vue Datepicker */
.vdp-datepicker input[readonly] {
  opacity: 1;
}
.vdp-datepicker .vdp-datepicker__calendar {
  border: none;
  box-shadow: 0 5px 30px 0 rgba(0,0,0,.25);
  padding: 5px;
  border-radius: 6px;
}
.vdp-datepicker.inline .vdp-datepicker__calendar {
  box-shadow: none;
  padding: 0;
  min-width: 300px;
  width: 100%;
}
.vdp-datepicker__calendar .cell.day-header,
.vdp-datepicker__calendar header span {
  font-size: 12px;
  font-weight: 700;
  color: #2d353c;
}
.vdp-datepicker__calendar header span {
  font-size: 16px;
}
.vdp-datepicker__calendar .cell {
  height: 32px;
  line-height: 32px;
  color: #2d353c;
  border: none;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: none;
  border-radius: 4px;
  background: #eee;
  color: #2d353c;
}
.vdp-datepicker__calendar .cell.selected {
  border: none;
  background: #348fe2 !important;
  color: #fff !important;
  border-radius: 4px;
}
body .vdp-datepicker__calendar .cell.day-header {
  font-size: 12px;
  height: 30px;
}
body .vdp-datepicker__calendar .cell {
  height: 30px;
  line-height: 30px;
  border: none !important;
  font-weight: 600;
  color: #6f8293;
}
body .vdp-datepicker__calendar .month,
body .vdp-datepicker__calendar .year {
  height: 54px;
  line-height: 54px;
}
body .vdp-datepicker__calendar .cell.day:not(.blank):not(.disabled):hover,
body .vdp-datepicker__calendar .cell.day:not(.blank):not(.disabled):focus,
body .vdp-datepicker__calendar .cell.month:not(.blank):not(.disabled):hover,
body .vdp-datepicker__calendar .cell.month:not(.blank):not(.disabled):focus,
body .vdp-datepicker__calendar .cell.year:not(.blank):not(.disabled):hover,
body .vdp-datepicker__calendar .cell.year:not(.blank):not(.disabled):focus  {
  background: #f2f4f5;
  text-shadow: none;
}
body .vdp-datepicker__calendar header {
  line-height: 30px;
}

body .vdp-datepicker__calendar header span {
  font-size: 12px;
  border-radius: 4px;
}
body .vdp-datepicker__calendar header span:not(.disabled):hover,
body .vdp-datepicker__calendar header span:not(.disabled):focus {
  background: #f2f4f5 !important;
  text-shadow: none;
}
body .vdp-datepicker__calendar header span.next:after,
body .vdp-datepicker__calendar header span.prev:after {
  content: '\f054';
  transform: none;
  border: none;
  font-family: Font Awesome\ 5 Free,Font Awesome\ 5 Pro,FontAwesome!important;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  text-indent: 0;
  top: 0;
  left: 0;
  right: 0;
}
body .vdp-datepicker__calendar header span.prev:after {
  content: '\f053';
}
</style>

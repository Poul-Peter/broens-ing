<template>
  <table class="table table-striped table-sm">
    <thead class="table-brøns-darkgray">
      <tr>
        <th scope="col">KK1</th>
        <th scope="col">KK2-4</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tdata in tabledata" :key="tdata.col1 + '-sd'" class="table-secondary">
        <td> {{ tdata.col1 }} </td>
        <td> {{ tdata.col2 }} </td>
      </tr>
    </tbody>
  </table>
</template>
<script>

import { ref } from 'vue';
export default {
  name: 'StatiskDokumentationTable',
  setup() {
    const tabledata = ref([
      { col1: 'A1 Konstruktionsgrundlag',   col2: 'A1 Konstruktionsgrundlag'},
      { col1: 'A2 Statiske beregninger',    col2: 'A2 Statiske beregninger'},
      { col1: 'A3 Konstruktionstegninger',  col2: 'A3 Konstruktionstegninger'},
      { col1: 'A4 Konstruktionsændringer',  col2: 'A4 Konstruktionsændringer'},
      { col1: '',                           col2: 'A4 Konstruktion som udført'},
      { col1: '-',                          col2: '-'},
      { col1: 'B1 Projektgrundlag',         col2: 'B1 Projektgrundlag'},
      { col1: '',                           col2: 'B2.1 Statisk kontrolplan, Projektering (P)'},
      { col1: '',                           col2: 'B2.2 Statisk kontrolplan, Udførelse (U)'},
      { col1: '',                           col2: 'B3.1 Statisk kontrolrapport, Projektering (P)'},
      { col1: '',                           col2: 'B3.2 Statisk kontrolrapport, Udførelse (U)'},
    ]);

    return { tabledata };
  }
}

</script>
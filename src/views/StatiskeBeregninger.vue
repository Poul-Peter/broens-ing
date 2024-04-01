<template>
  <div class="container my-5">
    <div class="row">
      <div class="text-left">

        <h1 class="fw-bold pb-3">Statiske beregninger</h1>
        <h4>Beregning af stålkonstruktioner og andre bærende konstruktioner</h4>
        <p>De første danske normer for byggeri udkom i 1920`erne. Dengang kunne man klare en statisk
          beregning på
          ganske få sider. Siden er der sket en del, og med det seneste bygningsreglement BR18 som udkom 1.
          udgave 1/1-2018 indførte man begrebet konstruktionsklasser og samtidig blev der krav om at den statiske
          dokumentation skulle følge SBI-anvisning 223 (SBI er Statens Byggeforskningsinstitut). Senere i BR18 2.
          udgave blev kravet omkring dokumentationen ændret til at skulle følge SBI-anvisning 271. Samtidig trådte
          kravet om certificeringsordningen i kraft d. 1 januar 2020, og dermed blev kravet til dokumentation af
          bærende konstruktioner ret entydig.</p>
        <p>Bygværker/konstruktioner placeres i såkaldte konstruktionsklasser, som igen afspejler kravet til dokumentation.</p>
        <p>Konstruktionsklasse KK1 er typisk følgende:</p>
        <ul>
          <li>Landbrugsbygninger</li>
          <li>Lagerhaller</li>
          <li>Simple Industrihaller</li>
          <li>Parcelhuse</li>
          <li>Sommerhuse</li>
          <li>etc.</li>
        </ul>
        <p>Konstruktionsklasse KK2 – KK4 vil være øvrige bygværker/konstruktioner.</p>
        <p>Kravet til den statiske dokumentation fremgår af nedenstående skema:</p>

      </div>
      <div class="col-lg-6">
        <StatiskDokumentationTable></StatiskDokumentationTable>
      </div>
      <div class="col-lg-6">
        
      </div>
    </div>
  </div>
</template>

<script>
import StatiskDokumentationTable from '../components/StatiskDokumentationTable.vue'
import { ref } from 'vue';
export default {
  name: 'StatiskeBeregninger',
  components: {
    StatiskDokumentationTable
  },
}

</script>
<template>
  <div class="flex align-items-center justify-content-center">
            <div class="m-2">
              <h1 class="">Deal Calculator</h1>
              <h5>*Images are from sandbox and not real data/companies</h5>
            </div>
            <div class="m-2">
                <Button v-tooltip="'More information'" class="center-icon" icon="pi pi-question" aria-label="Question" severity="info" rounded outlined @click="showDialogHelp = true"></Button>
            </div>

            <Dialog v-model:visible="showDialogHelp" modal header="Deal Calculator" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <h3>What is this</h3>
                <p>
                  These are screenshots from an in-house web application I developed to help my company calculate revenue possibilities for opportunities 
                  that they find. The calculations are derived from a spreadsheet that the company was using to initially calculate the opportunity deals
                  but would encounter errors and wasn't completely reliable.
                </p>
                <br>
                <p>
                  The entire application is written in C# with UI elements from Blazor. I created the data models for the data to be stored as well as created 
                  a database on the company's server to store the inputs and calculations. Integrated RESTful APIs to synchronize the company's database with 
                  SalesForce ensuring real-time data updates. The application is hosted on the company's server and is accessible to all employees.
                </p>
            </Dialog>
        </div>

  <div class="xl:w-6 md:w-9 mx-auto">
    <Galleria :value="slides" :numVisible="4" :circular="true" :showThumbnails="false" 
      :autoPlay="true" :showIndicators="true" :showItemNavigators="true">
      <template #item="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.caption" class="w-full block">
      </template>
      <template #caption="slotProps">
        <p> {{ slotProps.item.caption }} </p>
      </template>
    </Galleria>
  </div>
</template>

<script lang="ts" src="./DealCalc.ts"></script>
<style src="./DealCalc.css"></style>

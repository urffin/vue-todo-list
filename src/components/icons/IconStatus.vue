<script setup lang="ts">
defineProps<{
  isFinished: boolean;
}>();
</script>
<template>
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g v-bind:filter="isFinished ? 'url(#filter0_d_13_2211)' : undefined">
      <circle cx="14" cy="10" r="10" fill="white" />
      <circle cx="14" cy="10" r="9.5" stroke="#134EC1" />
    </g>
    <path
      v-if="isFinished"
      d="M10 9L14 14.5L18.5 5"
      stroke="#134EC1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_13_2211"
        x="0"
        y="0"
        width="28"
        height="28"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0745098 0 0 0 0 0.305882 0 0 0 0 0.756863 0 0 0 0.15 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_2211" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_2211" result="shape" />
      </filter>
    </defs>
  </svg>
</template>

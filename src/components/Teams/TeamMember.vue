<script setup>
import { defineProps } from 'vue'

const { member } = defineProps({
  member: Object
})
</script>

<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ member.name }}
    </th>
    <td class="px-6 py-4">{{ member.email }}</td>
    <td
      class="px-6 py-4 font-medium"
      :class="member.status === 'Active' ? 'text-blue-500' : 'text-gray-500'"
    >
      {{ member.status }}
    </td>
  </tr>
</template>

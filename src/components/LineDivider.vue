<template>
  <div class="divider text-center w-full flex items-center justify-center gap-4">
    <slot></slot>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #77767a;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #77767a;
}

.divider::before {
  margin-right: 8px;
}

.divider::after {
  margin-left: 8px;
}
</style>
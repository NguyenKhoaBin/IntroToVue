<template>
  <n-message-provider>
    <div class="flex h-full min-w-full w-fit">
      <Sidebar />
      <div class="flex flex-col flex-1">
        <div class="sticky top-0 z-50">
          <Topbar />
        </div>
        <RouterView />
      </div>
    </div>
  </n-message-provider>
</template>

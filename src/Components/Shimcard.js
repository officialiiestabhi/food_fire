import React from 'react'

const Shimcard = () => {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 w-80 h-80  mx-auto">
  <div class="animate-pulse flex space-x-4 ">
    
    <div class="flex-1 space-y-6 py-1">
    <div class="w-full h-3/4 bg-orange-300 "></div>
      <div class="h-2 bg-orange-300 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-orange-300 rounded col-span-2"></div>
          <div class="h-2 bg-orange-300 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-orange-300 rounded"></div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Shimcard

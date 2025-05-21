<script setup>
import { onMounted, ref, render } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import getCompanyList from '@/apis/company/getList.js';
import Button from '@/components/Button.vue';
import LineArrow from '@/components/icons/LineArrow.vue';
import FormInput from '@/components/inputs/FormInput.vue';
import FormSelect from '@/components/inputs/FormSelect.vue';
import DataTable from '@/components/DataTable.vue';

const companyList = ref([]);

const options = [
  { text: '全部', value: 'All' },
  { text: '啟用', value: 'Y' },
  { text: '停用', value: 'N' },
];

const columns = [
  {
    title: '廠商名稱',
    data: 'username',
  },
  {
    title: '啟用狀態',
    data: 'status',
    render: (status) => (status === 'Y' ? '啟用' : '停用'),
  },
  {
    title: '廠商統編',
    data: 'taxpayerNumber',
  },
  {
    title: '窗口電話',
    data: 'contactPhone',
  },
];

const getList = async () => {
  try {
    const res = await getCompanyList();
    companyList.value = res.payload;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getList();
});
</script>

<template>
  <section class="px-3 pt-12 xl:pt-16 pb-8">
    <div
      class="relative mb-12 px-3 border-l-4 border-tertiary-30 flex justify-between items-center"
    >
      <h2 class="text-h4B xl:text-h3B py-2">校驗商管理</h2>
      <Popover>
        <PopoverButton class="focus:outline-none">
          <Button
            type="button"
            size="sm"
            role="company"
            :filled="false"
          >
            <span>篩選</span>
            <LineArrow />
          </Button>
        </PopoverButton>
        <PopoverPanel class="absolute z-10 right-0 left-0 top-16 px-3 bg-white">
          <VForm class="px-6 py-4 border border-neutral-60 rounded-2xl grid grid-cols-9 gap-x-8">
            <div class="col-span-9 md:col-span-7 grid grid-cols-3 gap-x-4 gap-y-2">
              <FormSelect
                :options="options"
                id="status"
                name="status"
                class="col-span-3 md:col-span-1"
              >
                <template #label>啟用狀態</template>
              </FormSelect>
              <FormInput
                name="taxpayerNumber"
                label="廠商統編"
                id="taxpayerNumber"
                rules=""
                class="col-span-3 md:col-span-1"
              />
              <FormInput
                name="contactPhone"
                label="窗口電話"
                id="contactPhone"
                rules=""
                class="col-span-3 md:col-span-1"
              />
              <FormInput
                name="companyName"
                label="廠商名稱"
                id="companyName"
                rules=""
                class="col-span-3"
              />
            </div>
            <Button
              size="md"
              role="company"
              class="col-span-9 md:col-span-2 md:col-end-10 mb-2 self-end"
            >
              搜尋
            </Button>
          </VForm>
        </PopoverPanel>
      </Popover>
    </div>
    <div class="w-full h-full p-3">
      <DataTable
        :columns="columns"
        :data="companyList"
      />
    </div>
  </section>
</template>

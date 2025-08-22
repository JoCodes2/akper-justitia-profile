@props([
    'headerTitle' => '',
    'headerDescription' => '',
    'headerAddButton' => '',
    'buttonAdd' => false,
    'formId' => '',
    'buttonExport' => false,
    'buttonDelete' => false,
    'exportId' => '',
    'addBtnId' => '',
    'deleteBtnId' => '',
    'headerDeleteButton' => '',
])

<div class="px-3 py-3 ">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        {{-- Title and Description --}}
        <div class="mb-6 md:mb-0">
            <h1 class="text-3xl font-bold text-gray-800 flex items-center gap-2">
                {{ $headerTitle }}
            </h1>
            @if($headerDescription)
                <p class="text-gray-500 mt-1">{{ $headerDescription }}</p>
            @endif
        </div>

        {{-- Buttons --}}
        <div class="ml-auto flex items-center gap-3">
            @if($buttonExport)
                <i
                    class="fas fa-file-excel text-primary cursor-pointer text-2xl"
                    id="{{ $exportId }}"
                    title="Export Data"
                ></i>
            @endif

            @if($buttonAdd)
                <button
                    type="button"
                    id="{{ $addBtnId }}"
                    class="border border-primary text-primary rounded px-3 py-1 text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition"
                    data-modal-target="{{ $formId }}"
                >
                    <i class="fas fa-plus"></i> {{ $headerAddButton }}
                </button>
            @endif
             @if($buttonDelete)
                <button
                    type="button"
                    id="{{ $deleteBtnId }}"
                    class="border border-red-500 text-red-400 rounded px-3 py-1 text-sm flex items-center gap-2 hover:bg-red-600 hover:text-white transition"
                >
                    <i class="fas fa-trash-alt"></i> {{ $headerDeleteButton }}
                </button>
            @endif

        </div>
    </div>
</div>

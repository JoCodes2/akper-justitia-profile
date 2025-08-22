import $ from 'jquery';

export default function initTemplateUI() {
    let $sidebar = $('#sidebar');
    let $toggle = $('#toggleSidebar');
    let $overlay = $('#overlay');
    let $userBtn = $('#userMenuBtn');
    let $userDropdown = $('#userDropdown');

    $toggle.on('click', function (e) {
        e.preventDefault();
        $sidebar.toggleClass('-translate-x-full');
        $overlay.toggleClass('hidden');

        let $icon = $(this).find('i');
        if ($icon.hasClass('fa-bars')) {
            $icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            $icon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    $overlay.on('click', function () {
        $sidebar.addClass('-translate-x-full');
        $(this).addClass('hidden');
        let $icon = $toggle.find('i');
        $icon.removeClass('fa-times').addClass('fa-bars');
    });

    $userBtn.on('click', function (e) {
        e.stopPropagation();
        $userDropdown.toggleClass('hidden');
    });

    $(document).on('click', function (e) {
        if (
            !$userBtn.is(e.target) &&
            $userBtn.has(e.target).length === 0 &&
            !$userDropdown.is(e.target) &&
            $userDropdown.has(e.target).length === 0
        ) {
            $userDropdown.addClass('hidden');
        }
    });

    $(document).on('click', '[data-modal-target]', function () {
        let target = $(this).data('modal-target');
        let $modal = $(target);

        $modal.removeClass('hidden').addClass('flex');

        setTimeout(() => {
            $modal.find('> div').removeClass('scale-95 opacity-0')
                .addClass('scale-100 opacity-100');
        }, 10);
    });

    $(document).on('click', '[data-close-modal]', function () {
        let target = $(this).data('close-modal');
        let $modal = $(target);

        $modal.find('> div').removeClass('scale-100 opacity-100')
            .addClass('scale-95 opacity-0');

        setTimeout(() => {
            $modal.addClass('hidden').removeClass('flex');
        }, 200);
    });

    $(document).on('click', '.fixed.inset-0.z-50', function (e) {
        if ($(e.target).is('.fixed.inset-0.z-50')) {
            let target = '#' + $(this).attr('id');
            $(target).find('[data-close-modal]').trigger('click');
        }
    });


}

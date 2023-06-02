function confirmDialog({label, text, buttonText, onConfirm}) {
    let resolver
    const returnedPromise = new Promise(resolve => {
        resolver = resolve
    })

    $('#confirmationModalLabel').text(label);
    $('#confirmationModalText').html(text)
    const confirmationButton = $('#confirmationModalConfirm');
    confirmationButton.text(buttonText);
    confirmationButton.off('click');
    confirmationButton.click(async () => {
        if(onConfirm) {
            await onConfirm();
        }
        resolver(true);
        $('#confirmationModal').modal('hide');
    });
    $('#confirmationModal').on('hidden.bs.modal', function (e) {
        resolver(false);
    });
    $('#confirmationModal').modal('show');
    return returnedPromise;
}

function promptDialog({label, text, buttonText, onSubmit, defaultValue}) {
    let resolver
    const returnedPromise = new Promise(resolve => {
        resolver = resolve
    })

    $('#promptModalLabel').text(label);
    $('#promptModalText').html(text)
    const confirmationButton = $('#promptModalConfirm');
    confirmationButton.text(buttonText);
    $('#promptModalInput').val(defaultValue || '');
    confirmationButton.off('click');
    const submitFunction = async () => {
        const val = $('#promptModalInput').val();
        if(onSubmit) {
            await onSubmit();
        }
        resolver(val);
        $('#promptModal').modal('hide');
    }

    $('#promptModal').keypress(function(event) {
        if (event.keyCode == 13) {
            submitFunction();
        }
    });

    confirmationButton.click(submitFunction);
    $('#promptModal').on('hidden.bs.modal', function (e) {
        resolver(null);
    });
    $('#promptModal').on('shown.bs.modal', function (e) {
        $('#promptModalInput').focus();
    });
    $('#promptModal').modal('show');
    return returnedPromise;
}


function messageDialog({label, text, large, xl}) {
    $('#messageModalLabel').text(label);
    $('#messageModalText').html(text)
    if (large) {
        $(".modal-dialog").addClass("modal-lg");
    } else {
        $(".modal-dialog").removeClass("modal-lg");
    }
    if (xl) {
        $(".modal-dialog").addClass("modal-xl");
    } else {
        $(".modal-dialog").removeClass("modal-xl");
    }
    $('#messageModal').modal('show');
}

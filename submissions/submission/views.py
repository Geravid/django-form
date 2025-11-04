from django.shortcuts import render
from .forms import ResponseForm


def submission_view(request):
    if request.method == 'POST':
        form = ResponseForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'submission/thank_you.html')
    else:
        form = ResponseForm()

    return render(request, 'submission/form.html', {'form': form})

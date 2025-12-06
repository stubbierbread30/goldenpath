from django import template
from django.urls import reverse, NoReverseMatch

register = template.Library()

@register.simple_tag(takes_context=True)
def active(context, url_name):
    """
    Returns 'active' if the current request path matches the given url_name.
    Usage: {% active 'url_name' %}
    """
    request = context.get('request')
    if not request:
        return ''

    try:
        # Get the URL path for the given name
        url = reverse(url_name)
    except NoReverseMatch:
        return ''

    # Compare current path with the target URL
    return 'active' if request.path == url else ''

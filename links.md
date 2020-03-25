
# All links in 301s
A static URL shortening and link management project.

---
<script src="/assets/js/urls.1.js"></script> <script src="/assets/js/main.js"></script>
---



<table>
    <thead>
        <tr>
        <th>Short Code</th>
        <th style="text-align: center">301s Link</th>
        <th style="text-align: left">Actual Link</th>
        </tr>
    </thead>
    <tbody id="links-body">
    </tbody>
</table>

----
<script>
    if (typeof URLMaps !== 'undefined') {
        for (var urlMap of URLMaps) {
            Object.keys(urlMap).forEach(function eachKey(key) { 
                document.getElementById("links-body").innerHTML += (
                    `
                    <tr>
                    <td>${key}</td>
                    <td style="text-align: center">https://301s.github.io/?${key}</td>
                    <td style="text-align: left">${urlMap[key]}</td>
                    </tr>
                    `
                );
            });
        }
    }
</script>
----
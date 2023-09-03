---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Classification and regression with k-nearest neighbors

```{code-cell} ipython3
:tags: [hide-input, thebe-init]
import numpy as np
import matplotlib.pyplot as plt
import ipywidgets as widgets
```

```{code-cell} ipython3
# enter code here
```

`````{tab-set}
````{tab-item} Toy classification example
Use (copy) the below code to a code cell, and run the code cell.
```ipython3
# Edit -----------------> 
num_nearest = 2
# <----------------- Edit
```
````

````{tab-item} Toy regression example 
Use (copy) the below code to a code cell, and run the code cell.
```ipython3
# Edit -----------------> 
num_nearest = 2
# <----------------- Edit
```
````

````{tab-item} What and why
Provides example use of the k-NN algorithm. The scenarios should
highlight important properties such as the effect of the amount of 
nearest neighbors, and the effect of the amount of features and data points.

````
`````
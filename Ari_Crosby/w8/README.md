# WDI.js Library

_A JS library of useful functions:_

First Add this script tag into your index.html file, just before the closing body tag:
```
<script src="https://github.com/ari-xb/WDI_9_HOMEWORK/blob/master/Ari_Crosby/w8/wdi.js"></script>
```
[To the bottom of the page\/](#bott)

```
wdi.shuffle(list)
```

Returns a shuffled copy of the list

```
wdi.sample(list)
wdi.sample(list, 3)
```

Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

```
wdi.each(list, callback)
```

the each() method executes a provided function once per array element.

```
wdi.map(list, callback)
```

Produces a new array of values by mapping each value in list through a transformation function

```
wdi.filter(list, callback)
```
## Bottom of page<a name="bott"></a>
Looks through each value in the list, returning an array of all the values that pass a truth test

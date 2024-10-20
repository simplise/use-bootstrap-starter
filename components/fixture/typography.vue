<template>
 <b-h level="1">
  h1. Bootstrap heading
 </b-h>
 <b-p>This is an example paragraph.</b-p>
 <Anchor to="#">
  This is an example link
 </Anchor>
 <b-div text-color="success">
  <b-hr />
 </b-div>
 <b-ul>
  <b-li>All lists have their top margin removed</b-li>
  <b-li>And their bottom margin normalized</b-li>
  <b-li>
   Nested lists have no bottom margin
   <b-ul>
    <b-li>This way they have a more even appearance</b-li>
    <b-li>Particularly when followed by more list items</b-li>
   </b-ul>
  </b-li>
  <b-li>The left padding has also been reset</b-li>
 </b-ul>
 <b-ol>
  <b-li>Here’s an ordered list</b-li>
  <b-li>With a few list items</b-li>
  <b-li>
   It has the same overall look
  </b-li>
  <b-li>As the previous unordered list</b-li>
 </b-ol>
 <b-dl>
  <b-dt>Description lists</b-dt>
  <b-dd>A description list is perfect for defining terms.</b-dd>
  <b-dt>Term</b-dt>
  <b-dd>Definition for the term.</b-dd>
  <b-dd>A second definition for the same term.</b-dd>
  <b-dt>Another term</b-dt>
  <b-dd>Definition for this other term.</b-dd>
 </b-dl>
 <BBlockquote>
  <b-p>A well-known quote, contained in a blockquote element.</b-p>
 </BBlockquote>
 <b-table>
  <b-thead>
   <b-tr>
    <b-th scope="col">
     #
    </b-th>
    <b-th scope="col">
     First
    </b-th>
    <b-th scope="col">
     Last
    </b-th>
    <b-th scope="col">
     Handle
    </b-th>
   </b-tr>
  </b-thead>
  <b-tbody>
   <b-tr>
    <b-th scope="row">
     1
    </b-th>
    <b-td>Mark</b-td>
    <b-td>Otto</b-td>
    <b-td>@mdo</b-td>
   </b-tr>
   <b-tr>
    <b-th scope="row">
     2
    </b-th>
    <b-td>Jacob</b-td>
    <b-td>Thornton</b-td>
    <b-td>@fat</b-td>
   </b-tr>
   <b-tr>
    <b-th scope="row">
     3
    </b-th>
    <b-td colspan="2">
     Larry the Bird
    </b-td>
    <b-td>@twitter</b-td>
   </b-tr>
  </b-tbody>
 </b-table>
 <BFigure>
  <BFigureImage src="https://dummyimage.com/400x300/787878/ffffff&text=400x300" fluid rounded alt="400x300" />
  <BFigureCaption>A caption for the above image.</BFigureCaption>
 </BFigure>
 <BBlockquote>
  <b-p>A well-known quote, contained in a blockquote element.</b-p>
 </BBlockquote>
</template>
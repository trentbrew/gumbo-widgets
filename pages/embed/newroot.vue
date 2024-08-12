<script setup></script>

<template>
  <main class="h-full w-full flex flex-col justify-center items-center min-w-[50vw]">
    <section class="flex flex-col gap-4 p-0 w-full">
      <Accordion class="flex flex-col gap-2 w-full">
        <Accordion-item title="Check Yourself! Self-Awareness Tool">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Circle Facilitation Quick Guide">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Culture and Climate Staff Survey">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Culture and Climate Student Survey">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Peace Circle Facilitation Guide">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Peace Room Set-up Guide">
          <ul>
            <li><a href="#">Example PDF 1</a></li>
            <li><a href="#">Example PDF 2</a></li>
            <li><a href="#">Example PDF 3</a></li>
            <li><a href="#">Example PDF 4</a></li>
            <li><a href="#">Example PDF 5</a></li>
          </ul>
        </Accordion-item>
        <Accordion-item title="Mediated Conversation Guide">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Re-engagement Conversation Guide">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Restorative Conversation 1:1 Guide">
          <p>This content is not yet available.</p>
        </Accordion-item>
        <Accordion-item title="Staff/Student Mediated Conversation Guide">
          <p>This content is not yet available.</p>
        </Accordion-item>

        <!-- Nested accordion for SEL Resources -->

        <Accordion-item title="SEL Resources">
          <div class="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div class="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div class="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </Accordion-item>
      </Accordion>
    </section>
  </main>
</template>

<style scoped>
  a {
    color: #3b82f6;
    @apply hover:underline;
  }
</style>

<!-- JUNKYARD -->

<!-- <Accordion class="flex flex-col gap-2 w-full pt-4 bg-base-content/75 nested-accordion">
            <Accordion-item title="Building Our Community" data-child="true">
              <p>This content is not yet available.</p>
            </Accordion-item>
            <Accordion-item title="Conflict Resolution/Relationships" data-child="true">
              <p>This content is not yet available.</p>
            </Accordion-item>
            <Accordion-item title="Goal Setting" data-child="true">
              <p>This content is not yet available.</p>
            </Accordion-item>
            <Accordion-item title="Planning for the Future" data-child="true">
              <p>This content is not yet available.</p>
            </Accordion-item>
            <Accordion-item title="Re-Connection" data-child="true">
              <p>This content is not yet available.</p>
            </Accordion-item>
            <Accordion-item title="Wellness + Self Care" data-child="true">
              <p>This content is not yet available.</p>
            </Accordion-item>
          </Accordion> -->

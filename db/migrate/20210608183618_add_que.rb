# frozen_string_literal: true

class AddQue < ActiveRecord::Migration[6.1]
  def up
    # The current version as of this migration's creation.
    Que.migrate! :version => 3
  end

  def down
    # Completely removes Que's job queue.
    Que.migrate! :version => 0
  end
end

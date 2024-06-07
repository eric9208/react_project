class Api::V1::SleepsController < Api::ApplicationController
    before_action :authenticate_user!
    # before_action :current_activity
    
    
        def create
            activity = Activity.find_by_user_id(current_user)

            sleep = Sleep.new params.require(:sleep)
            .permit(
              :title,
              :duration,
              :note
            )
            sleep.activity = activity
            if sleep.save
               render json: {id: sleep.id}
            else
                render(
                    json: {errors: sleep.errors.messages },
                    status: 422 
                )
            end
        end
    
        def show
         
            sleep = Sleep.find params[:id]
            if sleep.activity.user === current_user
            render(json: sleep)
            
            else 
                render(json: {no: "no"})
            
            end
        end
    
        def update
            sleep = Sleep.find params[:id]
            if sleep.update(sleep_params)
                render json: {id: sleep.id}
                # redirect_to question_path(@question)
                # ^^older syntax
              else
                render(
                    json: { errors: sleep.errors.messages},
                    status: 422
                )
            end
        end
    
        def destroy
            sleep = Sleep.find params[:id]
            if sleep.destroy
            
                render(
                    json:{status: 200}
                )
            else
                #head :bad_request
                render( json: {status:500})
            end
          end
    
    
    private
    def sleep_params
        params.require(:sleep).permit(:duration, :note, :created_at)
      end

end
